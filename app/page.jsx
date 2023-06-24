"use client"

import styles from "./page.module.css"
import Image from "next/image"
import { memo, useState, useEffect } from "react"
import { SchemeModes } from "../util/scheme-mode"
import { Inter, Poppins } from "next/font/google"

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700"],
})

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "800"],
})

export default memo(() => {
	const [state, setState] = useState({
		scheme: "light",
	})

	useEffect(() => {
		setState((etc) => ({
			...etc,
			scheme: SchemeModes.getSchemeModePreference(),
		}))
	}, [state.scheme])

	// TODO: this needs to be converted into a Component/ForwardRef hook.
	const scheme = SchemeModes.getSchemeModeChanges()
	useEffect(() => {
		if (scheme !== state.scheme) {
			SchemeModes.setSchemeModePreference(scheme)
			setState((etc) => ({ ...etc, scheme }))
		}
	}, [state.scheme, scheme])

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p className={poppins.classaName}>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.js</code>
				</p>
				<div>
					<a
						className={poppins.classaName}
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority={true}
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority={true}
				/>

				{/* <button
					id='btn-escape'
					className='btn btn-primary'
					type='button'
					onClick={() => this.setState(this.errorStatus.get(false))}
				>
					<Image
						alt='&hellip;and LEAF‼'
						className='icon'
						height={24}
						src='./static/img/leaf.svg'
						width={24}
					/>
					<label htmlFor='btn-escape'>Make like a tree⁉</label>
				</button> */}
			</div>

			<div className={styles.grid}>
				<a
					className={poppins.classaName}
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Docs <span>-&gt;</span>
					</h2>
					<p className={poppins.classaName}>
						Find in-depth information about Next.js features and API.
					</p>
				</a>

				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Learn <span>-&gt;</span>
					</h2>
					<p className={poppins.classaName}>
						Learn about Next.js in an interactive course with&nbsp;quizzes!
					</p>
				</a>

				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Templates <span>-&gt;</span>
					</h2>
					<p className={poppins.classaName}>
						Explore the Next.js 13 playground.
					</p>
				</a>

				<a
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					className={styles.card}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={inter.className}>
						Deploy <span>-&gt;</span>
					</h2>
					<p className={poppins.classaName}>
						Instantly deploy your Next.js site to a shareable URL with Vercel.
					</p>
				</a>
			</div>
		</main>
	)
})
