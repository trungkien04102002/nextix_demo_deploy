export interface EPLMatch {
    id: number;
    ground: Ground;
    teams: TeamElement[];
    kickoff: Kickoff;
    provisionalKickoff: ProvisionalKickoff;
}
export interface Ground {
    name: string;
    city: string;
}
export interface TeamElement {
    team: Club;
    score: number;
}
export interface Club {
    club: TeamInformation;
}
export interface TeamInformation {
    name: string;
    shortName: string;
    abbr: string;
}
export interface Kickoff {
    label: string;
}
export interface ProvisionalKickoff {
    label: string;
}
export interface EPLStanding {
    position: number;
    team: Club;
    overall: Overall;
}
export interface Club {
    club: TeamInformation;
}
export interface TeamInformation {
    name: string;
    shortName: string;
    abbr: string;
}
export interface Overall {
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsDifference: number;
    points: number;
}
export declare type IEplRawData = {
    matches?: EPLMatch[];
    standings?: EPLStanding[];
};
