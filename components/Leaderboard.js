export default function Leaderboard({ leaderboard }) {
	const sorted = leaderboard.sort(
		(first, second) =>
			(second.fields.total =
				second.fields.gold * 7 +
				second.fields.silver * 5 +
				second.fields.bronze * 3) -
			(first.fields.total =
				first.fields.gold * 7 +
				first.fields.silver * 5 +
				first.fields.bronze * 3)
	);

	return (
		<>
			<table className='leaderboard bg-primary relative z-10 w-full text-white shadow-lg'>
				<thead>
					<tr>
						<th>Name</th>
						<th className='text-amber-700'>Bronze</th>
						<th className='text-gray-300'>Silver</th>
						<th className='text-yellow-400'>Gold</th>
						<th>Total</th>
					</tr>
				</thead>
				{sorted.map((medals, index) => (
					<tr key={medals.sys.id} className={`${index === 0 && "first"}`}>
						<td className='name' label='Name'>
							Name
						</td>
						<td className='bronze' label='Bronze'>
							{medals.fields.bronze}
						</td>
						<td className='silver' label='Silver'>
							{medals.fields.silver}
						</td>
						<td className='gold' label='Gold'>
							{medals.fields.gold}
						</td>
						<td className='total' label='Total'>
							{
								(medals.fields.total =
									medals.fields.gold * 7 +
									medals.fields.silver * 5 +
									medals.fields.bronze * 3)
							}
						</td>
					</tr>
				))}
			</table>
		</>
	);
}
