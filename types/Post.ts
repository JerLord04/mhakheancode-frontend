interface Post {
  id: number;
  user_id: number;
  tag: string;
  topics_name: string;
  md_plain_text: string;
  md_html_text: string;
  created_at: Date;
  updated_at: Date;
}

export type { Post };
