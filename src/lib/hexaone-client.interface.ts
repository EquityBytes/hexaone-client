interface SuccessfulResponse<T> {
  result: T;
}

type DynamicResponse<K extends string, T> = SuccessfulResponse<{
  [key in K]: T;
}>;

type Metadata = SuccessfulResponse<{
  updated: number;
}>;

type ProxyResponse<K extends string, T> = DynamicResponse<K, T> & Metadata;

interface AccountAvatar {
  large: string;
  medium: string;
  small: string;
}

interface Account {
  steam_id: string;
  avatar: AccountAvatar;
  balance: number;
  name: string;
  profile: string;
  roles: string[];
}

type GetAccountResponse = SuccessfulResponse<Account>;

interface AccessLog {
  url: string;
  ip: string;
  code: number;
  useragent: string;
  created: string;
}

type GetAccessLogResponse = SuccessfulResponse<AccessLog[]>;

type GetCurrenciesResponse = ProxyResponse<
  'currencies',
  Record<string, number>
>;

interface ItemTag {
  name: string;
  category: string;
  category_name: string;
  internal_name: string;
  color?: string;
}

interface ItemAction {
  link: string;
  name: string;
}

interface ItemDescription {
  type: string;
  value: string;
  app_data: string;
}

interface Item {
  tags: ItemTag[];
  type: string;
  actions: ItemAction[];
  icon_url: string;
  tradable: boolean;
  commodity: boolean;
  marketable: boolean;
  name_color: string;
  market_name: string;
  descriptions: ItemDescription[];
  icon_url_large: string | null;
  background_color: string | null;
  market_hash_name: string;
  market_tradable_restriction: number;
  market_marketable_restriction: number;
}

type GetItemsResponse = ProxyResponse<'items', Record<string, Item>>;

interface Price {
  avg: number;
  max: number;
  med: number;
  min: number;
  std: number;
  sales: number;
}

type PriceTimeframe = '7' | '14' | '30' | '90' | '365';

type GetPricesResponse = ProxyResponse<
  'prices',
  Record<string, { [key in PriceTimeframe]: Price }>
>;

interface Listing {
  items: number;
  price: number;
}

type GetListingsResponse = ProxyResponse<'listings', Record<string, Listing>>;

interface Avatar {
  icon: string;
  medium: string;
  full: string;
}

interface GroupMemberStats {
  count: number;
  online: number;
  in_chat: number;
  in_game: number;
}

interface Group {
  group_id: string;
  group_name: string;
  group_url: string;
  headline: string;
  summary: string;
  avatar: Avatar;
  members: GroupMemberStats;
}

interface Profile {
  steam_id: string;
  name: string;
  online_state: string;
  state_message: string;
  privacy_state: string;
  visibility_state: string;
  avatar: Avatar;
  vac_banned: boolean;
  trade_ban_state: boolean;
  is_limited_account: boolean;
  profile_url: string;
  custom_url: string;
  member_since: number;
  location: string;
  real_name: string;
  summary: string;
  groups: string[];
  primary_group: Group;
}

type GetProfileResponse = ProxyResponse<'profile', Profile>;

interface AssetTag {
  category: string;
  internal_name: string;
  localized_category_name: string;
  localized_tag_name: string;
  color?: string;
}

interface Asset extends Omit<Item, 'tags'> {
  asset_id: string;
  class_id: string;
  instance_id: string;
  amount: number;
  fraudwarnings: string[];
  tags: AssetTag[];
}

type GetInventoryResponse = ProxyResponse<'inventory', Record<string, Asset>>;

export {
  GetAccountResponse,
  GetAccessLogResponse,
  GetCurrenciesResponse,
  GetItemsResponse,
  GetPricesResponse,
  GetListingsResponse,
  GetProfileResponse,
  GetInventoryResponse,
};
