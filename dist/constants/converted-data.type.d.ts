import { LeagueStandingConverted, MatchConverted, Stadium, Team } from '../models';
export declare type ConvertedData = {
    teams?: Team[];
    stadiums?: Stadium[];
    matches?: MatchConverted[];
    standings?: LeagueStandingConverted[];
};
