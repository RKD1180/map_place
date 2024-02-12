"use client"
import Category from "@/components/Home/Category";
import GoogleMapView from "@/components/Home/GoogleMapView";
import RangeSelect from "@/components/Home/RangeSelect";
import { RatingList } from "@/components/Home/RatingList";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("session:", session);
    if (!session?.user) {
      router.push("/login");
    }
  }, [session])

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="md:col-span-3 col-span-12 h-screen">
          <Category />
          <RangeSelect />
          <RatingList />
        </div>
        <div className="md:col-span-9 col-span-12">
          <GoogleMapView />
        </div>
      </div>
    </div>
  );
}
