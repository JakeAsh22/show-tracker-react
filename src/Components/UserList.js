import React from 'react'
const placeholdList = [
    {
    id:'0',
    name: 'Friends'
    },
    {
        id:'1',
        name:'The Office'
    },
]
function UserList () {
    const [list, setList] = React.useState(placeholdList)
  
return (
    <div>
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
)
}
export default UserList