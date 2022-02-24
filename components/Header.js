 import {
     BadgeCheckIcon ,
CollectionIcon,
HomeIcon,
LightningBoltIcon,
SearchIcon,
UserIcon
 } from "@heroicons/react/outline"
import Image from "next/dist/client/image"
import HeaderItem from "./HeaderItem"

export default function Header() {
    return (
        <header className='flex flex-col sm:flex-row justify-between  items-center h-auto' >
            <div className="flex flex-grow justify-evenly max-w-2xl m-5">

                <HeaderItem  title='HOME' Icon={HomeIcon} />
                <HeaderItem  title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem  title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem  title='SEARCH' Icon={SearchIcon} />
                <HeaderItem  title='ACCOUNT' Icon={UserIcon} />
                <HeaderItem  title='VERIFIED' Icon={BadgeCheckIcon} />

            </div>
            <div className="mt--10">
            <Image  src="https://Links.papareact.com/ua6" width={200} height={80}/>
</div> 
        </header>
    )
}
