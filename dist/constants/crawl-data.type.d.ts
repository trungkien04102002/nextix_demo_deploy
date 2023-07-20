import { LeagueStanding, Match, Stadium, Team } from '../models';
export declare type CrawlData = {
    teams?: Team[];
    stadiums?: Stadium[];
    matches?: Match[];
    standing?: LeagueStanding[];
};
