import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.scss'
import styles from './page.module.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body >
				{/* <div className={styles.container}> */}
					{/* <Header /> */}
					{children}
					{/* <Footer /> */}
				{/* </div> */}
			</body>
		</html>
	)
}
