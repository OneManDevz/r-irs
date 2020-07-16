import React from 'react'
import { Rooms } from '../helpers/interfaces'
import RoomCard from './RoomCard'

const RoomsList = ({ rooms }: Rooms) => {
	console.log('Rooms -> rooms', rooms)

	return (
		<div className="App">
			{rooms.map((room) => (
				<RoomCard
					description={room.description}
					reservations={room.reservations}
					room_id={room.room_id}
					name={room.name}
				/>
			))}
		</div>
	)
}

export default RoomsList