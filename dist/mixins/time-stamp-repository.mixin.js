"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeStampRepositoryMixin = void 0;
// import getSearchText from '../common/helpers/get-search-text'
// import _ from 'lodash'
// import { searchFieldConfig } from '../constants/search-field-config'
// function resetSearchText(entityName: string, entityData: DataObject<Entity>)
// {
//   // Add search field based on config
//   const fields = _.get(searchFieldConfig, entityName)
//   if (!_.get(entityData, fields)) {
//     return entityData
//   }
//   if (fields) {
//     _.set(entityData, 'searchText', getSearchText(entityData, fields))
//   }
//   const codeField: string = _.get(entityData, 'code') as any
//   if (codeField) {
//     _.set(entityData, 'code', codeField.toUpperCase())
//   }
//   return entityData
// }
function TimeStampRepositoryMixin(repository) {
    class MixedRepository extends repository {
        async create(entity, options) {
            entity.createdAt = new Date();
            entity.updatedAt = new Date();
            // entity = resetSearchText(this.entityClass.name, entity)
            return super.create(entity, options);
        }
        async updateAll(data, where, options) {
            data.updatedAt = new Date();
            // data = resetSearchText(this.entityClass.name, data)
            return super.updateAll(data, where, options);
        }
        async replaceById(id, data, options) {
            data.updatedAt = new Date();
            // data = resetSearchText(this.entityClass.name, data)
            return super.replaceById(id, data, options);
        }
        async updateById(id, data, options) {
            data.updatedAt = new Date();
            // data = resetSearchText(this.entityClass.name, data)
            return super.updateById(id, data, options);
        }
        async save(data, options) {
            data.updatedAt = new Date();
            // data = resetSearchText(this.entityClass.name, data)
            return super.save(data, options);
        }
    }
    return MixedRepository;
}
exports.TimeStampRepositoryMixin = TimeStampRepositoryMixin;
//# sourceMappingURL=time-stamp-repository.mixin.js.map