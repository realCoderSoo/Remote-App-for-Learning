import { ContentObject } from './ContentObject';

export class Module {
  structure: ContentObject;
  moduleStartDate: string;
  moduleEndDate: string;
  moduleDueDate: string;
  isHidden: boolean;
  isLocked: boolean;
  id: string;
  title: string;
  shortTitle: string;
  type = 0;
  description: string;
  parentModuleId: string;
  duration: string;
  lastModifiedDate: string;
}
