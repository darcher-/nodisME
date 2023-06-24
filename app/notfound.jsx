"use client"

import { useRouter } from "next/router"
import styles from "./page.module.css"
import { memo } from "react"

export default memo(() => {
	const router = useRouter()

	return (
		<div>
			<h2>WOH! This page has made a mad dash and escaped our clutches!</h2>
			<dl>
				<dt>Code Alert:</dt>
				<dd>
					Active <code>&lt;404&gt; Not Found</code>
				</dd>
				<dt>Sevarity:</dt>
				<dd>
					Priority <code>1</code> Alert
				</dd>
				<dt>Dispatching Asset:</dt>
				<dd>
					Tasking Designation <strong>The Ruminating Roomba</strong>
					<br />
					<em>
						Current success rate: <code>100%</code>
					</em>
				</dd>
			</dl>
			<p>
				The dire investigation into this unfortunate issue has commenced. All
				avaliable assets have been reallocated to the recovery effort. Make no
				mistake, we will find this page and bring it back to justice.
			</p>
			<p>
				In the meantime, please accept our apologies. Proceed with any of the
				options provided below, we have a plethora of other pages who want
				nothing more than to enjoy a visit from you!.
			</p>
			<div className={styles.btnGroup}>
				<button
					className={styles.btnTertiary}
					type="button"
					id="btn-fallback"
					onClick={() => router.back()}
				>
					<Image
						alt='Go back to previous page"'
						className="icon"
						height={24}
						src="./static/img/door.one.svg"
						width={24}
					/>
					<label htmlFor="btn-fallback">Go Back</label>
				</button>

				<button
					className={styles.btnPrimary}
					type="button"
					id="btn-fallback"
					onClick={() => router.push("/")}
				>
					<Image
						alt="Go home"
						className="icon"
						height={24}
						src="./static/img/door.two.svg"
						width={24}
					/>
					<label htmlFor="btn-fallback">Go Home</label>
				</button>

				<button
					className={styles.btnSecondary}
					type="button"
					id="btn-fallback"
					onClick={() => router.reload(window.location.pathname)}
				>
					<Image
						alt="Refresh view"
						className="icon"
						height={24}
						src="./static/img/door.three.svg"
						width={24}
					/>
					<label htmlFor="btn-fallback">Refresh</label>
				</button>
			</div>
		</div>
	)
})
