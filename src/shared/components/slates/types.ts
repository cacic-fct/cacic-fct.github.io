export interface SlateMember {
  name: string;
  role: string;
  avatar: string;
}

export interface Slate {
  id: string;
  name: string;
  /** Inclusive calendar dates in YYYY-MM-DD format, in São Paulo time. */
  startDate: string;
  endDate: string;
  endDateIsExpected?: boolean;
  description?: string;
  members: SlateMember[];
}
