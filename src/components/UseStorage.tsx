import React, { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const UseStorage = (image: { name: any }) => {
  const [progress, setProgress] = useState<number | any>(0);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<null | any>(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(image.name);

    storageRef.put(image).on(
      "state_changed",
      (snap: { bytesTransfered: number; totalBytes: number }) => {
        const pourcentage = (snap.bytesTransfered / snap.totalBytes) * 100;
        setProgress(pourcentage);
      },
      (err: React.SetStateAction<string | null>) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      },
    );
  }, [image]);

  return { progress, url, error };
};

export default UseStorage;
