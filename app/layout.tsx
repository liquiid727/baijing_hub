import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import { nav_text,nav_route } from "./lib/category_cn";
import React,{ReactNode} from 'react'

const station_desc = '白荆回廊hub开发中，敬请期待'
const station_title = '白荆Data hub'

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="p-24">
        {children}
      </div>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <nav>
        <div className="float-left">
          left  logo 
        </div>
        <div className="float-right">
        <ul className="list-style:none flex justify-content"> 
          {
            nav_text.map(
              (item: string,index:number) => {
                return (
                  <li key={item} className="m-2">
                    <Link href={`/${nav_route[index]}`}>
                      {item}
                    </Link>
                  </li>
                );
              }
            )

          }
        </ul>
        </div>
       <div className="clear-both"></div>
      </nav>

    </>
  )
}


function SocialMedia() {
    const title ="我们的社交媒体"
  return (
    <div>
      <div>logo_占位符</div>
      <div>
        <div>{title}</div>
        <ul>
          <li>
            media logo && link list
          </li>
        </ul>
      </div>
    </div>
  )
}



const footer_desc_1= "为《白荆回廊》玩家制作的爱好者数据库"
const footer_desc_2 = "游戏资源版权归原版所有方xxx所有"
const footer_privacy = "隐私政策"
const footer_about = "关于我们"

const Footer = () => {
  return (
    <>
    <div>
      <div>{footer_desc_1}</div>
      <div>{footer_desc_2}</div>
      <div>{footer_privacy}</div>
      <div>{footer_about}</div>
    </div>
    </>)
}


export const metadata: Metadata = {
  title: station_title,
  description: station_desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
        <Nav/>

        {children}
        <Footer/>
        </Container>
        </body>
    </html>
  );
}
