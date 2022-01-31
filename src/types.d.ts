interface Todo {
  title: string;
  description: string;
  priority: Priority;
  id: number;
  done?: boolean;
  image?: string;
  createdDate?: Date;
  modifiedDate?: Date;
}

export enum Priority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}
