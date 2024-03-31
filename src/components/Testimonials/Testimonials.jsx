import React from 'react'
import style from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={style.testi_con}>
        <h3 className={style.testi_title}>Testimonials</h3>
        <div className={style.testi_list}>
            <div className={style.testi_items}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                    in optio architecto expedita amet possimus laudantium. Magni eaque 
                    soluta voluptas.
                </p>
                <img src="https://media.istockphoto.com/id/1485443416/photo/asian-business-man-holding-a-laptop-computer-and-standing-isolated-on-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=zJ72rLTDZcQ9dxM_I56JKudABS0epSE0xf48mO6Xbjo=" alt="" />
                <h4>John Doe</h4>
                <p className={style.bio}>Web Developer</p>
            </div>
            <div className={style.testi_items}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                    in optio architecto expedita amet possimus laudantium. Magni eaque 
                    soluta voluptas.
                </p>
                <img src="https://media.istockphoto.com/id/1794231561/photo/happy-young-asian-man-drinking-a-cup-of-coffee-in-an-summer-morning-relaxing-with-hot-drink.webp?b=1&s=170667a&w=0&k=20&c=01xzteOzNQ0NnTn2V0byptBtxudtcL5ePjQWkIBZLtY=" alt="" />
                <h4>Jane Doe</h4>
                <p className={style.bio}>Web Developer</p>
            </div>
            <div className={style.testi_items}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
                    in optio architecto expedita amet possimus laudantium. Magni eaque 
                    soluta voluptas.
                </p>
                <img src="https://media.istockphoto.com/id/1485086832/photo/young-korean-businessman-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=PK-UoiNVdMEdEozUtKfSbhW4vzqNCjRSF7W8vokfBzw=" alt="" />
                <h4>JoDoe</h4>
                <p className={style.bio}>Web Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials