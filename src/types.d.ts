interface Todo {
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  id?: number;
  done?: boolean;
  image?: string;
  createdDate?: Date;
  modifiedDate?: Date;
}
