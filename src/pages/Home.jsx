import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Location from "../components/home/Location";
import { ROLE } from "../shared/constants";
import Hero from "../components/home/Hero/Hero";

export default function Home() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const role = user?.role;

  if (isAuthenticated) {
    switch (role) {
      case ROLE.CUSTOMER:
        return (
          <>
            <Hero />
            <Location />
          </>
        );
      case ROLE.OWNER:
        return (
          <>
            <Hero />
            <Location />
          </>
        );
      case ROLE.ADMIN:
        return (
          <>
            <Hero />
            <Location />
          </>
        );
      default:
        break;
    }
  }

  return (
    <>
      {/* <Location /> */}
      <Hero></Hero>
    </>
  );
}
