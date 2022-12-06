import * as fromCursos from '../reducers/cursos.reducer';
import { selectCursosState } from './cursos.selectors';

describe('Cursos Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCursosState({
      [fromCursos.cursosFeatureKey]: {}
    });

    //expect(result).toEqual({});
  });
});
