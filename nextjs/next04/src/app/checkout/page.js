"use client";

import { useState } from "react";
import useSWR from "swr";
import Province from "./Province";

const _PROVINCE_API = `http://localhost:3000/api/province`;
const _DISTRICT_API = `http://localhost:3000/api/district`;

const _INIT_FALLBACK_DATA = { data: [] };
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function CheckOut() {
  return (
    <div>
      <h1>page check out</h1>
      <Province />
    </div>
  );
}
