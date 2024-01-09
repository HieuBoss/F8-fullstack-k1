"use client";

import { useState } from "react";
import useSWR from "swr";
import styles from "./checkout.module.scss";

const _PROVINCE_API = `http://localhost:3000/api/province`;
const _DISTRICT_API = `http://localhost:3000/api/district`;

const _INIT_FALLBACK_DATA = { data: [] };
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function Province() {
  const [provinceId, setProvinceId] = useState(0);

  const { data: provinces } = useSWR(_PROVINCE_API, fetcher, {
    fallback: _INIT_FALLBACK_DATA,
  });
  const { data: district } = useSWR(
    `${_DISTRICT_API}?province_id=${provinceId}`,
    fetcher,
    {
      fallback: _INIT_FALLBACK_DATA,
    }
  );

  const handleChangeProvince = (e) => {
    setProvinceId(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div>
      <h1>Province</h1>
      <select className={styles.select} onChange={handleChangeProvince}>
        <option value="">chọn tỉnh/tp</option>
        {provinces?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
      <select className={styles.select}>
        <option value="">chọn quận/huyện</option>
        {district?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
