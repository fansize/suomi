export type SiteProps = {
  id: number;
  title: string;
  description: string | null;
  href: string;
  icon: string | null;
  tags: string[];
};

export type Museum = {
  id: number;
  name: string;
  city: string;
  address: string;
  website: string;
  closed: string;
  regular_ticket: number;
  discounted_ticket: number;
  free_entry: string;
  museum_card: boolean;
};
