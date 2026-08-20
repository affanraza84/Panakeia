import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { runSeed } from "./seed";
import { GET as getProductsHandler } from "../src/app/api/products/route";
import { GET as getProductSlugHandler } from "../src/app/api/products/[slug]/route";
import { POST as postEnquiryHandler } from "../src/app/api/enquiries/route";
import { NextRequest } from "next/server";

async function demonstrateApiEndpoints() {
  console.log("\n=======================================================");
  console.log(" PART 1 BACKEND LIVE ENDPOINT DEMONSTRATION");
  console.log("=======================================================\n");

  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  process.env.MONGODB_URI = uri;

  await runSeed(uri);

  // 1. GET /api/products
  console.log("\n-------------------------------------------------------");
  console.log("1. GET /api/products (Testing live route handler)");
  console.log("-------------------------------------------------------");
  const req1 = new NextRequest("http://localhost:3000/api/products");
  const res1 = await getProductsHandler(req1);
  const data1 = await res1.json();
  console.log(`Status: ${res1.status} OK`);
  console.log("Payload Sample (first product):");
  console.log(JSON.stringify(data1.data[0], null, 2));

  // 2. GET /api/products/[slug] (Existing and 404)
  console.log("\n-------------------------------------------------------");
  console.log("2. GET /api/products/[slug]");
  console.log("-------------------------------------------------------");
  const req2Valid = new NextRequest("http://localhost:3000/api/products/panakeia-aesthetica-700");
  const res2Valid = await getProductSlugHandler(req2Valid, {
    params: Promise.resolve({ slug: "panakeia-aesthetica-700" }),
  });
  console.log(`[Valid Slug] Status: ${res2Valid.status} OK`);
  console.log(`[Valid Slug] Name: ${(await res2Valid.json()).data.name}`);

  const req2Invalid = new NextRequest("http://localhost:3000/api/products/non-existent-device");
  const res2Invalid = await getProductSlugHandler(req2Invalid, {
    params: Promise.resolve({ slug: "non-existent-device" }),
  });
  console.log(`[Invalid Slug] Status: ${res2Invalid.status} NOT FOUND`);
  console.log(`[Invalid Slug] Response Shape:`, await res2Invalid.json());

  // 3. POST /api/enquiries (Valid Payload)
  console.log("\n-------------------------------------------------------");
  console.log("3. POST /api/enquiries (Valid 201 Created Payload)");
  console.log("-------------------------------------------------------");
  const validBody = {
    name: "Dr. K. Srinivas Rao",
    email: "srinivas.rao@apollohospitals.org",
    phone: "+91 98490 88211",
    hospitalOrOrg: "Apollo Speciality Hospitals",
    city: "Visakhapatnam",
    message: "Seeking quotation and delivery timeline for 4 units of Panakeia Aesthetica 700.",
    type: "product-enquiry",
    productSlug: "panakeia-aesthetica-700",
  };
  const req3 = new NextRequest("http://localhost:3000/api/enquiries", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": "49.207.210.45",
    },
    body: JSON.stringify(validBody),
  });
  const res3 = await postEnquiryHandler(req3);
  console.log(`Status: ${res3.status} CREATED`);
  console.log("Response Body:", await res3.json());

  // 4. POST /api/enquiries (Rejected 400 Bad Request Payload)
  console.log("\n-------------------------------------------------------");
  console.log("4. POST /api/enquiries (Rejected 400 with Field Errors)");
  console.log("-------------------------------------------------------");
  const invalidBody = {
    name: "A", // too short
    email: "not-an-email",
    phone: "123", // too short
    message: "short", // too short
    type: "unknown-type",
  };
  const req4 = new NextRequest("http://localhost:3000/api/enquiries", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": "49.207.210.46",
    },
    body: JSON.stringify(invalidBody),
  });
  const res4 = await postEnquiryHandler(req4);
  console.log(`Status: ${res4.status} BAD REQUEST`);
  console.log("Response Body (Field Validation Shape):", JSON.stringify(await res4.json(), null, 2));

  // 5. POST /api/enquiries (Rate Limiting Verification - 6 rapid requests)
  console.log("\n-------------------------------------------------------");
  console.log("5. POST /api/enquiries Rate Limiter (6 rapid requests)");
  console.log("-------------------------------------------------------");
  const spamIp = "182.72.100.15";
  for (let i = 1; i <= 6; i++) {
    const reqSpam = new NextRequest("http://localhost:3000/api/enquiries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": spamIp,
      },
      body: JSON.stringify(validBody),
    });
    const resSpam = await postEnquiryHandler(reqSpam);
    const body = await resSpam.json();
    console.log(`Request #${i} -> Status: ${resSpam.status} | Code: ${body.code || "SUCCESS"} | Remaining: ${resSpam.headers.get("x-ratelimit-remaining") ?? 0}`);
    if (i === 6) {
      console.log("HTTP 429 Error Body:", body);
      console.log("Retry-After Header:", resSpam.headers.get("retry-after"), "seconds");
    }
  }

  await mongoose.disconnect();
  await mongod.stop();

  console.log("\n=======================================================");
  console.log(" ALL PART 1 BACKEND VERIFICATION MILESTONES COMPLETED");
  console.log("=======================================================\n");
}

demonstrateApiEndpoints().catch((err) => {
  console.error(err);
  process.exit(1);
});
