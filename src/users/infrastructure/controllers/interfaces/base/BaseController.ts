import IReadController from '../common/ReadController';
import IBaseUseCases from '../../../../application/use_cases/interfaces/base/BaseUseCases';

interface BaseController<T extends IBaseUseCases<unknown>> extends IReadController {}

export = BaseController;
