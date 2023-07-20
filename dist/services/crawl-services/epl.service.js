"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EplCrawlerService = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
// import * as fs from 'fs'
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const helpers_1 = require("../../common/helpers");
const handle_paging_url_1 = require("../../common/helpers/handle-paging-url");
const logger_config_1 = require("../../common/helpers/logger-config");
const provider_constant_1 = require("../../constants/provider-constant");
const models_1 = require("../../models");
const repositories_1 = require("../../repositories");
const logger = (0, logger_config_1.getLogger)('data-crawler-service');
let EplCrawlerService = class EplCrawlerService {
    constructor(crawlConfigurationRepository, teamRepository, stadiumRepository, matchRepository, leagueStandingRepository, leagueSeasonRepository) {
        this.crawlConfigurationRepository = crawlConfigurationRepository;
        this.teamRepository = teamRepository;
        this.stadiumRepository = stadiumRepository;
        this.matchRepository = matchRepository;
        this.leagueStandingRepository = leagueStandingRepository;
        this.leagueSeasonRepository = leagueSeasonRepository;
        this.timeStamp = Date.now();
    }
    async crawlMatches(crawlConfiguration) {
        const allFixturesData = [];
        const parsedUrl = (0, handle_paging_url_1.parseUrlEplCrawler)(crawlConfiguration.url);
        const baseUrl = parsedUrl.baseUrl;
        const queryParams = parsedUrl.queryParams;
        for (let page = 0; page < Number(queryParams.pageSize); page++) {
            const urlSearchParams = new URLSearchParams({ ...queryParams, page: page.toString() });
            const url = `${baseUrl}?${urlSearchParams}`;
            try {
                const response = await axios_1.default.get(url, { headers: { Origin: provider_constant_1.eplOrigin } });
                const data = response.data;
                for (const content of data.content) {
                    allFixturesData.push(content);
                }
            }
            catch (err) {
                throw new Error('Fail to fetch Matches of Football');
            }
        }
        return { matches: allFixturesData };
    }
    async crawlStandings(crawlConfiguration) {
        try {
            const response = await axios_1.default.get(crawlConfiguration.url, {
                headers: {
                    Origin: provider_constant_1.eplOrigin,
                },
            });
            const result = [];
            for (const row of response.data.tables[0].entries) {
                result.push(row);
            }
            return { standings: result };
        }
        catch (error) {
            throw new Error('Fail to fetch Standing of Football');
        }
    }
    convertMatchesData(crawlData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
        console.log('Visit save Convert Matches Data');
        // const dataResponse = await this.crawlMatches(crawlConfiguration)
        const result = [];
        const responeMatchData = crawlData.matches;
        for (const match of responeMatchData) {
            // console.log('Match raw:',match)
            const datetime = (0, helpers_1.formatDateEPL)((_a = match === null || match === void 0 ? void 0 : match.provisionalKickoff) === null || _a === void 0 ? void 0 : _a.label) || (0, helpers_1.formatDateEPL)((_c = (_b = match === null || match === void 0 ? void 0 : match.kickoff) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : '');
            // console.log('break')
            const homeFullName = (_f = (_e = (_d = match === null || match === void 0 ? void 0 : match.teams[0]) === null || _d === void 0 ? void 0 : _d.team) === null || _e === void 0 ? void 0 : _e.club) === null || _f === void 0 ? void 0 : _f.name;
            const awayFullName = (_j = (_h = (_g = match === null || match === void 0 ? void 0 : match.teams[1]) === null || _g === void 0 ? void 0 : _g.team) === null || _h === void 0 ? void 0 : _h.club) === null || _j === void 0 ? void 0 : _j.name;
            const stadiumName = (_k = match === null || match === void 0 ? void 0 : match.ground) === null || _k === void 0 ? void 0 : _k.name;
            const homeShortName = (_o = (_m = (_l = match === null || match === void 0 ? void 0 : match.teams[0]) === null || _l === void 0 ? void 0 : _l.team) === null || _m === void 0 ? void 0 : _m.club) === null || _o === void 0 ? void 0 : _o.shortName;
            const awayShortName = (_r = (_q = (_p = match === null || match === void 0 ? void 0 : match.teams[1]) === null || _p === void 0 ? void 0 : _p.team) === null || _q === void 0 ? void 0 : _q.club) === null || _r === void 0 ? void 0 : _r.shortName;
            const homeAbbr = (_u = (_t = (_s = match === null || match === void 0 ? void 0 : match.teams[0]) === null || _s === void 0 ? void 0 : _s.team) === null || _t === void 0 ? void 0 : _t.club) === null || _u === void 0 ? void 0 : _u.abbr;
            const awayAbbr = (_x = (_w = (_v = match === null || match === void 0 ? void 0 : match.teams[1]) === null || _v === void 0 ? void 0 : _v.team) === null || _w === void 0 ? void 0 : _w.club) === null || _x === void 0 ? void 0 : _x.abbr;
            const homeSlug = (0, helpers_1.generateSlug)((_0 = (_z = (_y = match === null || match === void 0 ? void 0 : match.teams[0]) === null || _y === void 0 ? void 0 : _y.team) === null || _z === void 0 ? void 0 : _z.club) === null || _0 === void 0 ? void 0 : _0.name);
            const awaySlug = (0, helpers_1.generateSlug)((_3 = (_2 = (_1 = match === null || match === void 0 ? void 0 : match.teams[1]) === null || _1 === void 0 ? void 0 : _1.team) === null || _2 === void 0 ? void 0 : _2.club) === null || _3 === void 0 ? void 0 : _3.name);
            const stadiumSlug = (0, helpers_1.generateSlug)((_4 = match === null || match === void 0 ? void 0 : match.ground) === null || _4 === void 0 ? void 0 : _4.name);
            const homeTeamGoals = Number((_6 = (_5 = match === null || match === void 0 ? void 0 : match.teams[0]) === null || _5 === void 0 ? void 0 : _5.score) !== null && _6 !== void 0 ? _6 : 0);
            const awayTeamGoals = Number((_8 = (_7 = match === null || match === void 0 ? void 0 : match.teams[1]) === null || _7 === void 0 ? void 0 : _7.score) !== null && _8 !== void 0 ? _8 : 0);
            const refId = match.id.toString();
            const matchEntry = new models_1.MatchConverted({
                datetime,
                stadiumName,
                homeShortName,
                awayShortName,
                homeAbbr,
                awayAbbr,
                homeFullName,
                awayFullName,
                stadiumSlug,
                homeSlug,
                awaySlug,
                refId,
                awayTeamGoals,
                homeTeamGoals,
            });
            result.push(matchEntry);
        }
        // const timeStampISO = new Date(this.timeStamp).toISOString()
        // const folderName = `epl-dto-${timeStampISO}`
        // const folderPath = `storage/${folderName}`
        // if (!fs.existsSync(folderPath)) {
        //   fs.mkdirSync(folderPath, { recursive: true })
        // }
        // const fileName = 'matches'
        // const dataFile = result.map((res) => JSON.stringify(res))
        // fs.writeFileSync(`${folderPath}/${fileName}.json`, dataFile.join('\n'), 'utf8')
        return {
            matches: result,
        };
    }
    convertStandingsData(crawlData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        console.log('Visit save Convert Standing Data');
        const dataResponse = crawlData.standings;
        const result = [];
        for (const row of dataResponse) {
            const position = row === null || row === void 0 ? void 0 : row.position;
            const teamName = (_b = (_a = row === null || row === void 0 ? void 0 : row.team) === null || _a === void 0 ? void 0 : _a.club) === null || _b === void 0 ? void 0 : _b.name;
            const teamSlug = (0, helpers_1.generateSlug)((_d = (_c = row === null || row === void 0 ? void 0 : row.team) === null || _c === void 0 ? void 0 : _c.club) === null || _d === void 0 ? void 0 : _d.name);
            //  const stadium = row?.ground?.name;
            //  const stadiumSlug = generateSlug(row?.ground?.name);
            //  const capacity = row?.ground?.capacity;
            //  const address = row?.ground?.city;
            const playedGames = (_e = row === null || row === void 0 ? void 0 : row.overall) === null || _e === void 0 ? void 0 : _e.played;
            const won = (_g = (_f = row === null || row === void 0 ? void 0 : row.overall) === null || _f === void 0 ? void 0 : _f.won) !== null && _g !== void 0 ? _g : null;
            const draw = (_h = row === null || row === void 0 ? void 0 : row.overall) === null || _h === void 0 ? void 0 : _h.drawn;
            const lost = (_j = row === null || row === void 0 ? void 0 : row.overall) === null || _j === void 0 ? void 0 : _j.drawn;
            const goalsDifference = (_k = row === null || row === void 0 ? void 0 : row.overall) === null || _k === void 0 ? void 0 : _k.goalsDifference;
            const goalsFor = (_l = row === null || row === void 0 ? void 0 : row.overall) === null || _l === void 0 ? void 0 : _l.goalsFor;
            const goalsAgainst = (_m = row === null || row === void 0 ? void 0 : row.overall) === null || _m === void 0 ? void 0 : _m.goalsAgainst;
            const points = (_o = row === null || row === void 0 ? void 0 : row.overall) === null || _o === void 0 ? void 0 : _o.points;
            const rowEntry = new models_1.LeagueStandingConverted({
                position,
                teamName,
                teamSlug,
                // stadiumSlug,
                // stadium,
                // capacity,
                // address,
                playedGames,
                won,
                draw,
                lost,
                goalsDifference,
                goalsFor,
                goalsAgainst,
                points,
            });
            result.push(rowEntry);
        }
        // const timeStampISO = new Date(this.timeStamp).toISOString()
        // const folderName = `epl-dto-${timeStampISO}`
        // const folderPath = `storage/${folderName}`
        // if (!fs.existsSync(folderPath)) {
        //   fs.mkdirSync(folderPath, { recursive: true })
        // }
        // const fileName = 'standing'
        // const dataFile = result.map((res) => JSON.stringify(res))
        // fs.writeFileSync(`${folderPath}/${fileName}.json`, dataFile.join('\n'), 'utf8')
        return {
            standings: result,
        };
    }
    async saveMatchesToDatabase(convertedData, crawlConfiguration) {
        var _a;
        console.log('Visit save Matches to DB');
        const matchesEntity = [];
        const leagueSeason = await this.leagueSeasonRepository.findOne({
            where: { id: Number(crawlConfiguration.principleId) },
            include: ['league', 'season'],
        });
        if (!leagueSeason) {
            throw new Error('Not found league season');
        }
        const matchData = convertedData.matches;
        for (const match of matchData) {
            // Check homeTeam if exist and create
            let homeTeam = await this.teamRepository.findOne({
                where: { slug: match.homeSlug },
            });
            if (!homeTeam) {
                //console.log(match)
                logger.info(`Not found team ${match.homeSlug} - Create new...`);
                homeTeam = await this.teamRepository.create(new models_1.Team({
                    slug: match.homeSlug,
                    name: match.homeFullName,
                    shortName: match.homeShortName,
                    abbr: match.homeAbbr,
                    provider: crawlConfiguration.crawlProvider,
                }));
            }
            // Check awayTeam if exist and create
            let awayTeam = await this.teamRepository.findOne({
                where: { slug: match.awaySlug },
            });
            if (!awayTeam) {
                logger.info(`Not found team ${match.awaySlug} - Create new...`);
                awayTeam = await this.teamRepository.create(new models_1.Team({
                    slug: match.awaySlug,
                    name: match.awayFullName,
                    shortName: match.awayShortName,
                    abbr: match.awayAbbr,
                    provider: crawlConfiguration.crawlProvider
                }));
            }
            // Check awayTeam if exist and create
            let stadium = await this.stadiumRepository.findOne({
                where: { slug: match.stadiumSlug },
            });
            if (!stadium) {
                logger.info(`Not found stadium ${match.stadiumSlug} - Create new...`);
                stadium = await this.stadiumRepository.create(new models_1.Stadium({
                    slug: match.stadiumSlug,
                    name: match.stadiumName,
                }));
            }
            // Check match if exist and create
            let matchRow = await this.matchRepository.findOne({
                where: { refId: match.refId, leagueSeasonId: leagueSeason.id, provider: crawlConfiguration.crawlProvider },
            });
            if (matchRow) {
                // continue
                const updatedMatch = matchRow;
                updatedMatch.refId = match.refId;
                updatedMatch.datetime = match.datetime;
                updatedMatch.leagueSeasonId = leagueSeason.id;
                updatedMatch.homeTeamId = homeTeam.id;
                updatedMatch.awayTeamId = awayTeam.id;
                updatedMatch.awayTeamGoals = Number(match.awayTeamGoals);
                updatedMatch.homeTeamGoals = Number(match.homeTeamGoals);
                updatedMatch.provider = crawlConfiguration.crawlProvider;
                await this.matchRepository.updateById(matchRow.id, {
                    refId: match.refId,
                    datetime: match.datetime,
                    leagueSeasonId: leagueSeason.id,
                    homeTeamId: homeTeam.id,
                    awayTeamId: awayTeam.id,
                    awayTeamGoals: Number(match.awayTeamGoals),
                    homeTeamGoals: Number(match.homeTeamGoals),
                    provider: crawlConfiguration.crawlProvider,
                });
                matchesEntity.push(updatedMatch);
            }
            else {
                const matchName = `${match.homeFullName} ${match.awayFullName} ${(_a = leagueSeason.id) === null || _a === void 0 ? void 0 : _a.toString()}`;
                matchRow = new models_1.Match({
                    refId: match.refId,
                    datetime: match.datetime,
                    slug: (0, helpers_1.generateSlug)(matchName),
                    leagueSeasonId: leagueSeason.id,
                    homeTeamId: homeTeam.id,
                    awayTeamId: awayTeam.id,
                    awayTeamGoals: Number(match.awayTeamGoals),
                    homeTeamGoals: Number(match.homeTeamGoals),
                    provider: crawlConfiguration.crawlProvider,
                });
                matchesEntity.push(matchRow);
                // Save the match
                await this.matchRepository.save(matchRow);
                // throw new Error('Not found match')
                logger.info(`Not found match ${match.refId} - Create new...`);
            }
        }
        return matchesEntity;
    }
    async saveStandingsToDatabase(convertedData, crawlConfiguration) {
        console.log('Visit save Standings to DB');
        const leagueStandingEntities = [];
        const leagueSeason = await this.leagueSeasonRepository.findOne({
            where: { id: Number(crawlConfiguration.principleId) },
            include: ['league', 'season'],
        });
        if (!leagueSeason) {
            throw new Error('Not found league season');
        }
        const standingData = convertedData.standings;
        for (const row of standingData) {
            const team = await this.teamRepository.findOne({ where: { slug: row.teamSlug } });
            if (!team) {
                continue;
            }
            let standing = await this.leagueStandingRepository.findOne({
                where: { leagueSeasonId: leagueSeason.id, teamId: team.id, provider: crawlConfiguration.crawlProvider },
            });
            if (standing) {
                // continue
                const updatedStanding = standing;
                updatedStanding.leagueSeasonId = leagueSeason.id;
                updatedStanding.teamId = team.id;
                updatedStanding.provider = crawlConfiguration.crawlProvider;
                updatedStanding.won = row.won;
                updatedStanding.draw = row.draw;
                updatedStanding.lost = row.lost;
                updatedStanding.playedGames = row.playedGames;
                updatedStanding.points = row.points;
                updatedStanding.goalsAgainst = row.goalsAgainst;
                updatedStanding.goalsDifference = row.goalsDifference;
                updatedStanding.goalsFor = row.goalsFor;
                updatedStanding.position = Number(row.position);
                await this.leagueStandingRepository.updateById(standing.id, {
                    leagueSeasonId: leagueSeason.id,
                    teamId: team.id,
                    provider: crawlConfiguration.crawlProvider,
                    won: row.won,
                    draw: row.draw,
                    lost: row.lost,
                    playedGames: row.playedGames,
                    points: row.points,
                    goalsAgainst: row.goalsAgainst,
                    goalsDifference: row.goalsDifference,
                    goalsFor: row.goalsFor,
                    position: Number(row.position),
                });
                leagueStandingEntities.push(updatedStanding);
            }
            else {
                standing = new models_1.LeagueStanding({
                    leagueSeasonId: leagueSeason.id,
                    teamId: team.id,
                });
                standing.provider = crawlConfiguration.crawlProvider;
                standing.won = row.won;
                standing.draw = row.draw;
                standing.lost = row.lost;
                standing.playedGames = row.playedGames;
                standing.points = row.points;
                standing.goalsAgainst = row.goalsAgainst;
                standing.goalsDifference = row.goalsDifference;
                standing.goalsFor = row.goalsFor;
                standing.position = Number(row.position);
                leagueStandingEntities.push(standing);
                await this.leagueStandingRepository.save(standing);
            }
        }
        return leagueStandingEntities;
    }
};
EplCrawlerService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CrawlConfigurationRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.TeamRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.StadiumRepository)),
    tslib_1.__param(3, (0, repository_1.repository)(repositories_1.MatchRepository)),
    tslib_1.__param(4, (0, repository_1.repository)(repositories_1.LeagueStandingRepository)),
    tslib_1.__param(5, (0, repository_1.repository)(repositories_1.LeagueSeasonRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CrawlConfigurationRepository,
        repositories_1.TeamRepository,
        repositories_1.StadiumRepository,
        repositories_1.MatchRepository,
        repositories_1.LeagueStandingRepository,
        repositories_1.LeagueSeasonRepository])
], EplCrawlerService);
exports.EplCrawlerService = EplCrawlerService;
//# sourceMappingURL=epl.service.js.map