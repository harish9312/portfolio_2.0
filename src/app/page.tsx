"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BasePage } from "@/components/BasePage";

export default function Home() {
  return (
    <>
      <BasePage showIntro>
        <div>HEllo</div>
      </BasePage>
    </>
  );
}
