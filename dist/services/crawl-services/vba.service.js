"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VBACrawlerService = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const axios_1 = tslib_1.__importDefault(require("axios"));
const cheerio_1 = tslib_1.__importDefault(require("cheerio"));
const slugify_1 = tslib_1.__importDefault(require("slugify"));
const constants_1 = require("../../constants");
const sport_type_enum_1 = require("../../constants/sport-type.enum");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
let VBACrawlerService = class VBACrawlerService {
    constructor(sportTypeRepository, leagueSeasonRepository, teamRepository, stadiumRepository, matchRepository, leagueStandingRepository) {
        this.sportTypeRepository = sportTypeRepository;
        this.leagueSeasonRepository = leagueSeasonRepository;
        this.teamRepository = teamRepository;
        this.stadiumRepository = stadiumRepository;
        this.matchRepository = matchRepository;
        this.leagueStandingRepository = leagueStandingRepository;
    }
    async crawlMatches(crawlConfiguration) {
        var _a, _b;
        try {
            const matches = [];
            const response = await axios_1.default.get(crawlConfiguration.url);
            const html = response.data;
            const $ = cheerio_1.default.load(html.html);
            const refLeagueSeasonId = (_b = (_a = $('input[type="hidden"][id="competitionId"]').val()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null;
            $('.match-wrap').each((index, element) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
                const matchId = (_a = $(element)) === null || _a === void 0 ? void 0 : _a.attr('id');
                const VBAId = matchId ? parseInt(matchId === null || matchId === void 0 ? void 0 : matchId.replace('extfix_', '')) : -1;
                const refId = VBAId === null || VBAId === void 0 ? void 0 : VBAId.toString();
                const status = ((_b = $(element)) === null || _b === void 0 ? void 0 : _b.hasClass('STATUS_COMPLETE')) ? 'COMPLETE' : 'SCHEDULED';
                const homeName = (_d = (_c = $(element)) === null || _c === void 0 ? void 0 : _c.find('.home-team .team-name-full')) === null || _d === void 0 ? void 0 : _d.text();
                const homeSlug = (0, slugify_1.default)(homeName, { lower: true });
                const homeLogo = (_g = (_f = (_e = $(element)) === null || _e === void 0 ? void 0 : _e.find('.home-team .team-logo img')) === null || _f === void 0 ? void 0 : _f.attr('src')) !== null && _g !== void 0 ? _g : null;
                const homeTeamGoals = status === 'COMPLETE' ? parseInt((_j = (_h = $(element)) === null || _h === void 0 ? void 0 : _h.find('.homescore .fake-cell')) === null || _j === void 0 ? void 0 : _j.text()) : null;
                const awayName = (_l = (_k = $(element)) === null || _k === void 0 ? void 0 : _k.find('.away-team .team-name-full')) === null || _l === void 0 ? void 0 : _l.text();
                const awaySlug = (0, slugify_1.default)(awayName, { lower: true });
                const awayLogo = (_p = (_o = (_m = $(element)) === null || _m === void 0 ? void 0 : _m.find('.away-team .team-logo img')) === null || _o === void 0 ? void 0 : _o.attr('src')) !== null && _p !== void 0 ? _p : null;
                const awayTeamGoals = status === 'COMPLETE' ? parseInt((_r = (_q = $(element)) === null || _q === void 0 ? void 0 : _q.find('.awayscore .fake-cell')) === null || _r === void 0 ? void 0 : _r.text()) : null;
                const dateString = (_t = (_s = $(element)) === null || _s === void 0 ? void 0 : _s.find('.match-time span')) === null || _t === void 0 ? void 0 : _t.text();
                const datetime = (_u = new Date(dateString)) === null || _u === void 0 ? void 0 : _u.toISOString();
                const stadiumName = (_w = (_v = $(element)) === null || _v === void 0 ? void 0 : _v.find('.match-venue .venuename')) === null || _w === void 0 ? void 0 : _w.text();
                const stadiumSlug = (0, slugify_1.default)(stadiumName, { lower: true });
                if (VBAId !== -1) {
                    const match = {
                        refId,
                        refLeagueSeasonId,
                        homeSlug,
                        awaySlug,
                        homeName,
                        awayName,
                        homeLogo,
                        awayLogo,
                        homeTeamGoals,
                        awayTeamGoals,
                        stadiumName,
                        stadiumSlug,
                        datetime,
                        status,
                    };
                    matches.push(match);
                }
            });
            return {
                matches,
            };
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }
    async crawlStandings(crawlConfiguration) {
        try {
            const standings = [];
            const response = await axios_1.default.get(crawlConfiguration.url);
            const html = response.data;
            const $ = cheerio_1.default.load(html);
            // Get refLeagueSeasonId by url
            // `https://hosted.dcd.shared.geniussports.com/VBA/en/competition/${refLeagueSeasonId}/standings`
            const parts = crawlConfiguration.url.split('/');
            const refLeagueSeasonId = parts[6];
            $('tbody tr').each((index, element) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
                const teamName = (_c = (_b = (_a = $(element)) === null || _a === void 0 ? void 0 : _a.find('.team-name .team-name-full')) === null || _b === void 0 ? void 0 : _b.text()) === null || _c === void 0 ? void 0 : _c.trim();
                const teamSlug = (0, slugify_1.default)(teamName, { lower: true });
                const teamLogo = (_f = (_e = (_d = $(element)) === null || _d === void 0 ? void 0 : _d.find('.team-logo img')) === null || _e === void 0 ? void 0 : _e.attr('src')) !== null && _f !== void 0 ? _f : null;
                const position = parseInt((_j = (_h = (_g = $(element)) === null || _g === void 0 ? void 0 : _g.find('td:nth-child(1)')) === null || _h === void 0 ? void 0 : _h.text()) === null || _j === void 0 ? void 0 : _j.trim());
                const playedGames = parseInt((_m = (_l = (_k = $(element)) === null || _k === void 0 ? void 0 : _k.find('.STANDINGS_played')) === null || _l === void 0 ? void 0 : _l.text()) === null || _m === void 0 ? void 0 : _m.trim());
                const won = parseInt((_q = (_p = (_o = $(element)) === null || _o === void 0 ? void 0 : _o.find('.STANDINGS_won')) === null || _p === void 0 ? void 0 : _p.text()) === null || _q === void 0 ? void 0 : _q.trim());
                const lost = parseInt((_t = (_s = (_r = $(element)) === null || _r === void 0 ? void 0 : _r.find('.STANDINGS_lost')) === null || _s === void 0 ? void 0 : _s.text()) === null || _t === void 0 ? void 0 : _t.trim());
                const wonPercentage = parseInt((_w = (_v = (_u = $(element)) === null || _u === void 0 ? void 0 : _u.find('.STANDINGS_percentageWon')) === null || _v === void 0 ? void 0 : _v.text()) === null || _w === void 0 ? void 0 : _w.trim());
                const goalsFor = parseInt((_z = (_y = (_x = $(element)) === null || _x === void 0 ? void 0 : _x.find('.STANDINGS_scoredFor')) === null || _y === void 0 ? void 0 : _y.text()) === null || _z === void 0 ? void 0 : _z.trim());
                const goalsAgainst = parseInt((_2 = (_1 = (_0 = $(element)) === null || _0 === void 0 ? void 0 : _0.find('.STANDINGS_scoredAgainst')) === null || _1 === void 0 ? void 0 : _1.text()) === null || _2 === void 0 ? void 0 : _2.trim());
                const goalsDifference = parseInt((_5 = (_4 = (_3 = $(element)) === null || _3 === void 0 ? void 0 : _3.find('.STANDINGS_pointsDiff')) === null || _4 === void 0 ? void 0 : _4.text()) === null || _5 === void 0 ? void 0 : _5.trim());
                const streak = parseInt((_8 = (_7 = (_6 = $(element)) === null || _6 === void 0 ? void 0 : _6.find('.STANDINGS_streak')) === null || _7 === void 0 ? void 0 : _7.text()) === null || _8 === void 0 ? void 0 : _8.trim());
                const refId = `${crawlConfiguration.principleId}-${(0, slugify_1.default)(teamName, { lower: true })}`;
                standings.push({
                    refId,
                    refLeagueSeasonId,
                    teamName,
                    teamSlug,
                    teamLogo,
                    position,
                    playedGames,
                    won,
                    lost,
                    wonPercentage,
                    goalsFor,
                    goalsAgainst,
                    goalsDifference,
                    streak,
                });
            });
            return {
                standings,
            };
        }
        catch (error) {
            console.log(error);
            return {};
        }
    }
    convertMatchesData(crawlData) {
        const rawMatches = crawlData === null || crawlData === void 0 ? void 0 : crawlData.matches;
        const teams = [];
        const stadiums = [];
        const matches = [];
        if (rawMatches && rawMatches.length > 0) {
            for (const match of rawMatches) {
                const refId = match === null || match === void 0 ? void 0 : match.refId;
                const refLeagueSeasonId = match === null || match === void 0 ? void 0 : match.refLeagueSeasonId;
                const homeSlug = match === null || match === void 0 ? void 0 : match.homeSlug;
                const awaySlug = match === null || match === void 0 ? void 0 : match.awaySlug;
                const homeFullName = match === null || match === void 0 ? void 0 : match.homeName;
                const awayFullName = match === null || match === void 0 ? void 0 : match.awayName;
                const homeLogo = match === null || match === void 0 ? void 0 : match.homeLogo;
                const awayLogo = match === null || match === void 0 ? void 0 : match.awayLogo;
                const homeTeamGoals = match === null || match === void 0 ? void 0 : match.homeTeamGoals;
                const awayTeamGoals = match === null || match === void 0 ? void 0 : match.awayTeamGoals;
                const stadiumName = match === null || match === void 0 ? void 0 : match.stadiumName;
                const stadiumSlug = match === null || match === void 0 ? void 0 : match.stadiumSlug;
                const datetime = match === null || match === void 0 ? void 0 : match.datetime;
                const status = match === null || match === void 0 ? void 0 : match.status;
                matches.push(new models_1.MatchConverted({
                    refId,
                    refLeagueSeasonId,
                    homeSlug,
                    awaySlug,
                    homeFullName,
                    awayFullName,
                    homeLogo,
                    awayLogo,
                    homeTeamGoals,
                    awayTeamGoals,
                    stadiumName,
                    stadiumSlug,
                    datetime,
                    status,
                }));
                if (!teams.find((team) => team.slug === homeSlug)) {
                    teams.push(new models_1.Team({
                        name: homeFullName,
                        slug: homeSlug,
                        logo: homeLogo,
                    }));
                }
                if (!teams.find((team) => team.slug === awaySlug)) {
                    teams.push(new models_1.Team({
                        name: awayFullName,
                        slug: awaySlug,
                        logo: awayLogo,
                    }));
                }
                if (!stadiums.find((stadium) => stadium.slug === stadiumSlug)) {
                    stadiums.push(new models_1.Stadium({
                        name: stadiumName,
                        slug: stadiumSlug,
                    }));
                }
            }
        }
        return {
            matches,
            teams,
            stadiums,
        };
    }
    convertStandingsData(crawlData) {
        const rawStandings = crawlData.standings;
        const teams = [];
        const standings = [];
        if (rawStandings && rawStandings.length > 0) {
            for (const standing of rawStandings) {
                const refId = standing === null || standing === void 0 ? void 0 : standing.refId;
                const refLeagueSeasonId = standing === null || standing === void 0 ? void 0 : standing.refLeagueSeasonId;
                const teamName = standing === null || standing === void 0 ? void 0 : standing.teamName;
                const teamSlug = standing === null || standing === void 0 ? void 0 : standing.teamSlug;
                const teamLogo = standing === null || standing === void 0 ? void 0 : standing.teamLogo;
                const position = standing === null || standing === void 0 ? void 0 : standing.position;
                const playedGames = standing === null || standing === void 0 ? void 0 : standing.playedGames;
                const won = standing === null || standing === void 0 ? void 0 : standing.won;
                const lost = standing === null || standing === void 0 ? void 0 : standing.lost;
                const wonPercentage = standing === null || standing === void 0 ? void 0 : standing.wonPercentage;
                const goalsFor = standing === null || standing === void 0 ? void 0 : standing.goalsFor;
                const goalsAgainst = standing === null || standing === void 0 ? void 0 : standing.goalsAgainst;
                const goalsDifference = standing === null || standing === void 0 ? void 0 : standing.goalsDifference;
                const streak = standing === null || standing === void 0 ? void 0 : standing.streak;
                standings.push(new models_1.LeagueStandingConverted({
                    refId,
                    refLeagueSeasonId,
                    teamName,
                    teamSlug,
                    teamLogo,
                    position,
                    playedGames,
                    won,
                    lost,
                    wonPercentage,
                    goalsFor,
                    goalsAgainst,
                    goalsDifference,
                    streak,
                }));
                if (!teams.find((team) => team.slug === teamSlug)) {
                    teams.push(new models_1.Team({
                        name: teamName,
                        slug: teamSlug,
                        logo: teamLogo,
                    }));
                }
            }
        }
        return {
            standings,
            teams,
        };
    }
    async saveMatchesToDatabase(convertedData, crawlConfiguration) {
        const sportType = await this.sportTypeRepository.findOne({
            where: { name: sport_type_enum_1.SportTypeEnum.Basketball },
        });
        const leagueSeasonId = parseInt(crawlConfiguration.principleId);
        const provider = constants_1.CrawlProvider.VBA;
        const matchEntities = [];
        if (sportType) {
            // Save Teams
            if (convertedData.teams) {
                for (const team of convertedData.teams) {
                    const teamInDatabase = await this.teamRepository.findOne({
                        where: { slug: team.slug, sportTypeId: sportType.id, provider },
                    });
                    const teamEntity = {
                        name: team === null || team === void 0 ? void 0 : team.name,
                        slug: team === null || team === void 0 ? void 0 : team.slug,
                        logo: team === null || team === void 0 ? void 0 : team.logo,
                        sportTypeId: sportType === null || sportType === void 0 ? void 0 : sportType.id,
                        provider,
                    };
                    if (teamInDatabase) {
                        await this.teamRepository.updateById(teamInDatabase.id, teamEntity);
                    }
                    else {
                        await this.teamRepository.create(teamEntity);
                    }
                }
            }
            // Save Stadiums
            if (convertedData.stadiums) {
                for (const stadium of convertedData.stadiums) {
                    const stadiumInDatabase = await this.stadiumRepository.findOne({
                        where: { slug: stadium.slug },
                    });
                    const stadiumEntity = {
                        name: stadium === null || stadium === void 0 ? void 0 : stadium.name,
                        slug: stadium === null || stadium === void 0 ? void 0 : stadium.slug,
                    };
                    if (stadiumInDatabase) {
                        await this.stadiumRepository.updateById(stadiumInDatabase.id, stadiumEntity);
                    }
                    else {
                        await this.stadiumRepository.create(stadiumEntity);
                    }
                }
            }
            // Save Matches
            if (convertedData.matches) {
                for (const match of convertedData.matches) {
                    const matchInDatabase = await this.matchRepository.findOne({
                        where: { refId: match.refId, sportTypeId: sportType.id, provider },
                    });
                    const homeTeam = await this.teamRepository.findOne({
                        where: { slug: match.homeSlug, sportTypeId: sportType.id, provider },
                    });
                    const awayTeam = await this.teamRepository.findOne({
                        where: { slug: match.awaySlug, sportTypeId: sportType.id, provider },
                    });
                    const stadium = await this.stadiumRepository.findOne({
                        where: { slug: match.stadiumSlug },
                    });
                    if (homeTeam && awayTeam && stadium) {
                        const matchEntity = {
                            sportTypeId: sportType === null || sportType === void 0 ? void 0 : sportType.id,
                            provider,
                            homeTeamGoals: match === null || match === void 0 ? void 0 : match.homeTeamGoals,
                            awayTeamGoals: match === null || match === void 0 ? void 0 : match.awayTeamGoals,
                            datetime: match === null || match === void 0 ? void 0 : match.datetime,
                            status: match === null || match === void 0 ? void 0 : match.status,
                            refId: match === null || match === void 0 ? void 0 : match.refId,
                            leagueSeasonId,
                            homeTeamId: homeTeam === null || homeTeam === void 0 ? void 0 : homeTeam.id,
                            awayTeamId: awayTeam === null || awayTeam === void 0 ? void 0 : awayTeam.id,
                            stadiumId: stadium === null || stadium === void 0 ? void 0 : stadium.id,
                        };
                        if (matchInDatabase) {
                            await this.matchRepository.updateById(matchInDatabase.id, matchEntity);
                        }
                        else {
                            await this.matchRepository.create(matchEntity);
                        }
                        matchEntities.push(new models_1.Match(matchEntity));
                    }
                }
            }
        }
        return matchEntities;
    }
    async saveStandingsToDatabase(convertedData, crawlConfiguration) {
        const sportType = await this.sportTypeRepository.findOne({
            where: { name: sport_type_enum_1.SportTypeEnum.Basketball },
        });
        const leagueSeasonId = parseInt(crawlConfiguration.principleId);
        const provider = constants_1.CrawlProvider.VBA;
        const standingEntities = [];
        if (sportType) {
            // Save Teams
            if (convertedData.teams) {
                for (const team of convertedData.teams) {
                    const teamInDatabase = await this.teamRepository.findOne({
                        where: { slug: team.slug, sportTypeId: sportType.id, provider },
                    });
                    const teamEntity = {
                        name: team === null || team === void 0 ? void 0 : team.name,
                        slug: team === null || team === void 0 ? void 0 : team.slug,
                        logo: team === null || team === void 0 ? void 0 : team.logo,
                        sportTypeId: sportType === null || sportType === void 0 ? void 0 : sportType.id,
                        provider,
                    };
                    if (teamInDatabase) {
                        await this.teamRepository.updateById(teamInDatabase.id, teamEntity);
                    }
                    else {
                        await this.teamRepository.create(teamEntity);
                    }
                }
            }
            // Save Standings
            if (convertedData.standings) {
                for (const standing of convertedData.standings) {
                    const standingInDatabase = await this.leagueStandingRepository.findOne({
                        where: {
                            refId: standing.refId,
                            sportTypeId: sportType.id,
                            provider,
                        },
                    });
                    const team = await this.teamRepository.findOne({
                        where: { slug: standing.teamSlug, sportTypeId: sportType.id, provider },
                    });
                    if (team) {
                        const standingEntity = {
                            sportTypeId: sportType === null || sportType === void 0 ? void 0 : sportType.id,
                            provider,
                            position: standing === null || standing === void 0 ? void 0 : standing.position,
                            playedGames: standing === null || standing === void 0 ? void 0 : standing.playedGames,
                            won: standing === null || standing === void 0 ? void 0 : standing.won,
                            lost: standing === null || standing === void 0 ? void 0 : standing.lost,
                            wonPercentage: standing === null || standing === void 0 ? void 0 : standing.wonPercentage,
                            goalsFor: standing === null || standing === void 0 ? void 0 : standing.goalsFor,
                            goalsAgainst: standing === null || standing === void 0 ? void 0 : standing.goalsAgainst,
                            goalsDifference: standing === null || standing === void 0 ? void 0 : standing.goalsDifference,
                            streak: standing === null || standing === void 0 ? void 0 : standing.streak,
                            refId: standing === null || standing === void 0 ? void 0 : standing.refId,
                            teamId: team === null || team === void 0 ? void 0 : team.id,
                            leagueSeasonId,
                        };
                        if (standingInDatabase) {
                            await this.leagueStandingRepository.updateById(standingInDatabase.id, standingEntity);
                        }
                        else {
                            await this.leagueStandingRepository.create(standingEntity);
                        }
                        standingEntities.push(new models_1.LeagueStanding(standingEntity));
                    }
                }
            }
        }
        return standingEntities;
    }
};
VBACrawlerService = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SportTypeRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.LeagueSeasonRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.TeamRepository)),
    tslib_1.__param(3, (0, repository_1.repository)(repositories_1.StadiumRepository)),
    tslib_1.__param(4, (0, repository_1.repository)(repositories_1.MatchRepository)),
    tslib_1.__param(5, (0, repository_1.repository)(repositories_1.LeagueStandingRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SportTypeRepository,
        repositories_1.LeagueSeasonRepository,
        repositories_1.TeamRepository,
        repositories_1.StadiumRepository,
        repositories_1.MatchRepository,
        repositories_1.LeagueStandingRepository])
], VBACrawlerService);
exports.VBACrawlerService = VBACrawlerService;
//# sourceMappingURL=vba.service.js.map