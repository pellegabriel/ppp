import React from 'react'
import styles from './dashboard.module.scss'
import { CakeGraph } from './CakeGraph'
import { flowerData } from '../../pages'
import Image from 'next/image';

import { useRouter } from 'next/router'
interface MatchStats {
	type: string
	wins: number
	losses: number
	draws: number
	winRate?: number
	lossRate?: number
	drawRate?: number
	imgSrc: string
}

interface GameData {
	[key: string]: number
}

const gameData = {
	wins: {
		resignation: 100,
		checkmate: 150,
		timeout: 50,
	},
	draws: {
		agreement: 10,
		threefoldRepetition: 5,
		stalemate: 5,
	},
	losses: {
		resignation: 80,
		checkmate: 120,
		timeout: 210,
	},
}

const matchStatsData: MatchStats[] = [
	{
		type: 'BULLET',
		wins: 10000,
		losses: 500,
		draws: 32,
		winRate: 66,
		imgSrc: '/assets/images/icons/BULLET.svg',
	},
	{
		type: 'BLITZ',
		wins: 800,
		losses: 200,
		draws: 0,
		winRate: 80,
		imgSrc: '/assets/images/icons/BLITZ.svg',
	},
	{
		type: 'QUICK',
		wins: 1000,
		losses: 500,
		draws: 32,
		winRate: 66,
		imgSrc: '/assets/images/icons/QUICK.svg',
	},
	{
		type: 'CLASSIC',
		wins: 800,
		losses: 200,
		draws: 0,
		winRate: 80,
		imgSrc: '/assets/images/icons/CLASSICAL.svg',
	},
	{
		type: 'CUSTOM',
		wins: 800,
		losses: 200,
		draws: 0,
		winRate: 80,
		imgSrc: '/assets/images/icons/CUSTOM.svg',
	},
]

interface PercentageData {
	label: string
	value: number // El valor debe ser un número
}

function calculatePercentages(data: GameData): PercentageData[] {
	const total = Object.values(data).reduce((sum, value) => sum + (value as number), 0) // Asumimos que value es de tipo número
	return Object.keys(data).map((key): PercentageData => {
		const percentage = ((data[key] as number) / total) * 100
		return {
			label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the label
			value: parseFloat(percentage.toFixed(1)), // Convertimos el resultado a número
		}
	})
}

const asString = (value) => {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value || '';
};
export default function Dashboard() {
  const router = useRouter();
  const { id, alt, text } = router.query;

  const flower = flowerData.find(f => f.id === asString(id));

	const updatedMatchStats = matchStatsData.map((match) => ({
		...match,

	}))

	const winsBy = calculatePercentages(gameData.wins)
	const drawsBy = calculatePercentages(gameData.draws)
	const lossesBy = calculatePercentages(gameData.losses)
	return (
    <>
		<div className={styles.dashboard}>
    <div>
    <p className={styles.text}>{text}</p>
      {flower && <Image src={flower.image} alt={ 'Imagen'} width={300} height={300} />}

    </div>
			<div className={styles.statGraphColumn}>
				<div className={styles.cakeGraphSection}>
					<CakeGraph data={winsBy} />
					<CakeGraph data={drawsBy} />
					<CakeGraph data={lossesBy} />
				</div>

			</div>
		</div></>
	)
}
