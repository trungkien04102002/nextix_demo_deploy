import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { LeagueSeason, LeagueSeasonRelations, League, Season } from '../models';
import { LeagueRepository } from './league.repository';
import { SeasonRepository } from './season.repository';
export declare class LeagueSeasonRepository extends DefaultCrudRepository<LeagueSeason, typeof LeagueSeason.prototype.id, LeagueSeasonRelations> {
    protected leagueRepositoryGetter: Getter<LeagueRepository>;
    protected seasonRepositoryGetter: Getter<SeasonRepository>;
    readonly league: BelongsToAccessor<League, typeof LeagueSeason.prototype.id>;
    readonly season: BelongsToAccessor<Season, typeof LeagueSeason.prototype.id>;
    constructor(dataSource: DbDataSource, leagueRepositoryGetter: Getter<LeagueRepository>, seasonRepositoryGetter: Getter<SeasonRepository>);
}
