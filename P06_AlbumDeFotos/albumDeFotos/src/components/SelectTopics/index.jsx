import React from 'react'

const SelectTopics = ({selectedTopic, handleChangeSelectedTopic, topics}) => {
    return (
        <select value={selectedTopic} onChange={handleChangeSelectedTopic}>
            <option value={""}>All</option>
            {topics.map((topic, i) => (
                <option key={topic.id} value={topic.id}>
                    {topic.slug}
                </option>
            ))}
        </select>
    )
}

export default SelectTopics