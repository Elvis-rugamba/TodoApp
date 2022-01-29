interface Todo {
  title: string;
  description: string;
  priority: Priority;
  id?: number;
  image?: string;
  createdDate?: Date;
  modifiedDate?: Date;
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}
