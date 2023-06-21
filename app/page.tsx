"use client";

import Image from "next/image";
import styles from "./page.module.css";
import DropDown from "./ui/dropdown";
import * as React from "react";

export default function Home() {
  const [state, setState] = React.useState<{
    show: boolean;
  }>({
    show: false,
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            By{" "}
            <Image
              src="/slick.graphic.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={164}
              height={96}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/placeholder.logo.svg"
          alt="Next.js Logo"
          width={256}
          height={64}
          priority
        />
      </div>

      <div style={{ marginBottom: 360 }}>
        <DropDown onClickOutside={() => setState(() => ({ show: false }))} show={state.show}>
          <button
            type="button"
            aria-haspopup={true}
            aria-controls="#info-panel"
            onClick={() => setState({ show: !state.show })}
            data-state={state.show ? "active" : "inactive"}
            className={styles.ddtoggle}>
            <span className={styles.badge}>NEW</span>
            Information Panel
            <svg className={styles.icon} focusable={false} aria-label="Arrow Down">
              <use xlinkHref="#down-arrow" />
            </svg>
          </button>
        </DropDown>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
