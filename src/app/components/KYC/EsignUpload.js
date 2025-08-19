import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import { handleApiError } from "@/app/utility/handleApiError";

const EsignUpload = ({ setPageStep }) => {
  const sigPadRef = useRef(null);

  const clearCanvas = () => {
    sigPadRef.current.clear();
  };

  const getKycIdFromURL = () => {
    const token = localStorage.getItem("accessToken");
    const kyc_id = localStorage.getItem("kyc_id");
    return kyc_id;
  };

  const uploadSignature = async () => {
    if (sigPadRef.current.isEmpty()) {
      alert("Please sign first!");
      return;
    }

    const kyc_id = getKycIdFromURL();
    if (!kyc_id) {
      alert("Kyc id is not created");
      return;
    }

    try {
      const dataURL = sigPadRef.current.toDataURL("image/png");
      const blob = await (await fetch(dataURL)).blob();
      const fileName = `${kyc_id}.png`;

      // Step 1: Get pre-signed URL
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/s3/upload?fileName=${fileName}`
      );
      const { url } = await res.json();

      // Step 2: Upload to S3
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "image/png" },
        body: blob,
      });

      // Step 3: Notify backend
      const notifyRes = await fetch(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/files/sign_upload`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ kyc_req: kyc_id }),
        }
      );

      const notifyResJson = await notifyRes.json();
      console.log("Response from /sign_upload:", notifyResJson);

      if (notifyRes.ok) {
        setPageStep(4);
        ShowSucessmessages("Signature uploaded successfully");
      } else {
        alert("Signature uploaded, but failed to notify backend.");
      }
    } catch (error) {
      handleApiError(error);
    }
  };
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-bold mb-4">Draw your signature</h2>
      <div className="border-2 border-white rounded w-[100%]">
        <SignaturePad
          ref={sigPadRef}
          penColor="#ffff"  
          canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-gray-500 text-white rounded text-[15px] font-medium "
        >
          Clear
        </button>
        <button
          onClick={uploadSignature}
          className="px-6 py-2 bg-[#551262] text-white rounded text-[15px] font-medium "
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default EsignUpload;
