import { Assignee } from './assignee.interface';

export interface Github {
    html_url: string;
    title: string;
    assignee: Assignee;
    state: string;
}
