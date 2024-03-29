import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetPostersQuery } from './postersApiSlice'
import { memo } from 'react'

import React from 'react'

const Poster = ({ posterId }) => {

    const { poster } = useGetPostersQuery("postersList", {
        selectFromResult: ({ data }) => ({
            poster: data?.entities[posterId]
        }),
    })

    const navigate = useNavigate()

    if (poster) {
        const created = new Date(poster.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(poster.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/posters/${posterId}`)

        return (
            <tr className="table__row">
                <td className="table__cell note__status">
                    {poster.completed
                        ? <span className="note__status--completed">Completed</span>
                        : <span className="note__status--open">Open</span>
                    }
                </td>
                <td className="table__cell note__created">{created}</td>
                <td className="table__cell note__updated">{updated}</td>
                <td className="table__cell note__title">{poster.title}</td>
                <td className="table__cell note__username">{poster.position}</td>

                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
//This way the component will only re-render if there are changes in the data
const memoizedPoster = memo(Poster)

export default memoizedPoster
