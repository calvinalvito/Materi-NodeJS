const buffer = Buffer.from("Budi Santoso", "utf-8");
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("QnVkaSBTYW50b3Nv", "base64");
console.info(buffer.toString("utf-8"))


buffer.reverse();
console.info(buffer.toString());