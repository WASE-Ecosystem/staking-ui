import type { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'
import type { CSSProperties } from 'react'

import type { AirdropMetadata } from '../common/Airdrop'

export enum TokenStandard {
  // Fungible, can have more than 1
  Fungible = 1,
  // Non fungible are all unique
  NonFungible = 2,
  // No receipt
  None = 3,
}

export type Analytic = {
  metadata?: {
    key: string
    type: 'staked'
    totals?: {
      key: string
      value: number
    }[]
  }
}

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: 'beta-life-nft'
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: 'Beta Life NFT Stake'
  // Whether or not to show name in header, defaults false
  nameInHeader?: true
  // Publickey for this stake pool
  stakePoolAddress: '8XpHAvcM8BfYZAHF8hA43NhDFafYtk7rmbFEpiEem12h'
  // Description for this stake pool
  description?: 'Stake your NFT(s) to earn rewards from various reward mechanisms including tokens, merchandise, redeemable rewards by the Beta Life Staking pool.'
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Default empty. Setting this will tell the UI to only show tokens of that standard. Supports fungible or non-fungible
  tokenStandard?: TokenStandard
  // Optional config to hide this pool from the main page
  hidden?: false
  // Optional config to disable finding this pool
  notFound?: false
  // Optional hostname to remap
  hostname?: string
  // Optional hide footer
  hideFooter?: boolean
  // Optional config to link redirect to page when you click on this pool
  redirect?: 'https://stake-beta-ui.vercel.app'
  // styles to apply to the whole stake pool
  styles?: CSSProperties
  // Contrast homepage background
  contrastHomepageBkg?: true
  // Colors object to style the stake page
  colors?: {
    primary: '#31618E'
    secondary: '#D9F3FF'
    accent?: '#D9F3FF'
    fontColor?: '#F2F2F2'
    fontColorSecondary?: 'F2F2F2'
    backgroundSecondary?: '#7A93B3'
    fontColorTertiary?: 'F2F2F2'
  }
  // Disallow regions based on IP address
  disallowRegions?: { code: string; subdivision?: string }[]
  // If the logo should be displayed with paddding
  logoPadding?: true
  // Optional social links
  socialLinks?: string[]
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: 'https://imgbox.com/jtCL2ksO'
  // Secondary image url to be used next to the icon in the pool selector and the header
  secondaryImageUrl?: 'https://imgbox.com/jtCL2ksO'
  // Background image for pool
  backgroundImage?: 'https://imgbox.com/Q0BwWmr9'
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: 'https://betalifehealth.com'
  // Max staked is used to compute percentage of total staked
  maxStaked?: 10
  // Links to show at the top right of the page
  links?: [
    { 
      text: 'Website'; 
      value: 'https://betalifehealth.com' 
    },
    { 
      text: 'Twitter'; 
      value: 'https://twitter.com/BetaLifeHealth' 
    },
    { 
      text: 'MagicEden'; 
      value: 'https://magiceden.io' 
    }
  ]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user. These will not contain verified creators
  airdrops?: AirdropMetadata[]
  // Analytics to show at the top of stake pool. supports trait based analytics and overall tokens data
  analytics?: Analytic[]
}

export const defaultSecondaryColor = 'rgba(29, 78, 216, 255)'

export const stakePoolsWithHostnames: {
  stakePoolAddress: '8XpHAvcM8BfYZAHF8hA43NhDFafYtk7rmbFEpiEem12h'
  hostname: 'https://stake-beta-ui.vercel.app'
}[] = [
  
  {
    stakePoolAddress: '8XpHAvcM8BfYZAHF8hA43NhDFafYtk7rmbFEpiEem12h',
    hostname: 'https://stake-beta-ui.vercel.app'
  }
]
