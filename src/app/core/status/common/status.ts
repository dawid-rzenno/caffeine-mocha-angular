import {IconName} from "@fortawesome/fontawesome-svg-core";

export interface Status {
  message: string;
  icon: IconName; 
  isSuccess: boolean
}
