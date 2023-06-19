import { useState } from "react";
import { v4 as uuid} from "uuid";

function randomEmoji() {
    const emojis = ["😀","😃","😫","😩","🥺","😢","😭","😮‍💨","😤","😠","😡","🤬",]
    const random = Math.floor(Math.random() * emojis.length)
    return emojis[random]
}

function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}])

    const handleClick = () => {
        const newEmoji = {id: uuid(), emoji: randomEmoji()}
        setEmojis((emoji) => [...emoji, newEmoji])
    }

    const deleteEmoji = (id) => {
        setEmojis((emoji) => {
            return emoji.filter(emoji => emoji.id !== id)
        })
    }

    const makeHearts = () => {
        setEmojis((emoji) => {
            return emoji.map((e) => {
                return {...e, emoji: "👹"}
            })
        })
    }

    return ( 
        <div className="emoji-clicker">
            { emojis.map((emoji) => 
                <span onClick={() => deleteEmoji(emoji.id)} style={{fontSize: "4rem"}}>{emoji.emoji}</span>
            )}
            <button onClick={handleClick}>Add Emoji</button>
            <button onClick={makeHearts} >Make them all hearts</button>
        </div>
     );
}

export default EmojiClicker;