import { normalize } from './normalize';

const anObject = ({ id = 'irrelevant', name = 'irrelevant' }) => ({
    id,
    name,
});

const aObjectMapper = (item: any) => ({
    title: item.name,
});

describe('normalize', () => {
  it('should normalize an array of objects', () => {
    const aCollection = [anObject({ id: '1' }), anObject({ id: '2' })];
    const anIdField = 'id';
    const normalizedCollection = normalize(aCollection, anIdField, aObjectMapper);
    expect(normalizedCollection).toEqual({
      '1': { title: 'irrelevant' },
      '2': { title: 'irrelevant' },
    });
  });
});
