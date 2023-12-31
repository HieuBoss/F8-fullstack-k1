import React from 'react';
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import {List} from "postcss/lib/list";

const Home = async ({params: {lang}}: { params: { lang: Locale } }) => {
    const {page} = await getDictionary(lang)

    return (
        <>
          <div style={{display: "flex"}}>
              <div style={{width : "30%", border:"5px solid red"}} >
                  <img src={"https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"} alt={"img"}/>
              </div>
              <div  style={{ width : "70%", paddingLeft : " 20px 60px"}} >
                  <h1 style={{textAlign: "center", fontWeight: "bold" , fontSize: "1.6rem"}}>{page.home.userInfo}</h1>
                  <p style={{margin: "20px 0px 0px 20px" }}> {page.home.fullName}</p>
                  <p  style={{margin: "20px 0px 0px 20px" }}>{page.home.studyAt}</p>
                  <p style={{margin: "20px 0px 0px 20px" }}>{page.home.desc}</p>
              </div>
          </div>
        </>
    );
};

export default Home;