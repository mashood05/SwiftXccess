import { Currencies } from '~/api/Constants/CurrencyOptions'
import { CardBrand, CardType } from '~/api/Constants/Card'

export module ManagedCardsSchemas {
  export interface ManagedInstrumentBalances {
    availableBalance?: string
    actualBalance?: number
  }

  export interface ManagedCard {
    id: {
      type: string
      id: number
    }
    profileId: string
    tag: string
    ownerId: {
      type: string
      id: string
    }
    friendlyName: string
    active: boolean
    currency: Currencies
    balances: ManagedInstrumentBalances
    state: {
      blockTypes: object
      destroyType: string
    }
    fiProvider: string
    channelProvider: string
    type: CardType
    cardBrand: CardBrand
    cardNumber: string
    cvv: string
    cardNumberFirstSix: string
    cardNumberLastFour: string
    nameOnCard: string
    startMmyy: string
    expiryMmyy: string
    cardLevelClassification: string
    expiryPeriodMonths: number
    renewalType: string
    creationTimestamp: string
    action: any[]
    cardholderMobileNumber: string
  }

  export interface CreateManagedCardRequest {
    profileId: any
    tag?: string
    owner: {
      type: string
      id: number
    }
    friendlyName: string
    currency: string
    fiProvider: string
    channelProvider: string
    nameOnCard?: string
    createNow?: boolean
    cardholderMobileNumber?: string
    formattedMobileNumber?: string
  }

  export interface DestroyRequest {
    id: string
    body: {
      destroyType: string
    }
  }
}
