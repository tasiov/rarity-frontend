import Image from 'next/image'
import React from 'react'
import { MaterialImage } from '../components/Coins/material'
import { GoldImage } from '../components/Coins/gold'

export const MULTICALL2_ADDRESS = '0x5f28e9fca1c34b2dd44630df26fc7aa3d3f35eb9'

export const NetworkContextName = 'NETWORK'

export enum ChainId {
    MAINNET = 250,
}

export const RARITY_ADDRESS = '0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb'

export const RARITY_GOLD_ADDRESS = '0x2069B76Afe6b734Fb65D1d099E7ec64ee9CC76B2'

export const RARITY_ATTRIBUTES_ADDRESS = '0xB5F5AF1087A8DA62A23b08C00C6ec9af21F397a1'

export const RARITY_HELPER_ADDRESS = '0x56a20B765bf7FF0edf67aB2752E3c8703821fE2E'

export const RARITY_SKILLS_ADDRESS = '0x51C0B29A1d84611373BA301706c6B4b72283C80F'

export const RARITY_DAYCARE_ADDRESS = '0xf1bf34E46ECf465591B7a7fA9635E4C583174fa3'

export const RARITY_ADVENTURE_TIME = '0x0D4C98901563ca730332e841EDBCB801fe9F2551'

export const RARITY_LIB = '0xA4d271d3022Cf3174437cF2C159cBdBa74C4857a'

export const RARITY_CELLAR_ADDRESS = '0x2A0F1cB17680161cF255348dDFDeE94ea8Ca196A'

export const RARITY_CRAFTING_ADDRESS = '0xf41270836dF4Db1D28F7fd0935270e3A603e78cC'

export const RARITY_NAMES_ADDRESS = '0xc73e1237a5a9ba5b0f790b6580f32d04a727dc19'

export const RARITY_PACK_ADDRESS = '0xb3b96df217e88ee51513c0abc036c3d0fc885eaa'

export const RARITY_CRAFTING_SUMMONER = 1758709

export const CRAFTING_ALLOWANCE = 4294967295

export const RARITY_NAMES_SUMMONER = 1672965

export const BURN_ADDRESS = '0x000000000000000000000000000000000000dEaD'

export interface CoinData {
    name: string
    image: JSX.Element
    unit: 'ether' | 'wei'
}

export const GAME_COINS: { [k: string]: CoinData } = {
    gold: {
        name: 'GOLD',
        image: <GoldImage />,
        unit: 'ether',
    },
    materials: {
        name: 'MATERIALS',
        image: <MaterialImage />,
        unit: 'wei',
    },
}
