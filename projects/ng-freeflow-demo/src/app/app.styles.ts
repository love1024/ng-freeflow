import { BlockStyleSheet, RootStyleSheet } from 'ng-freeflow-lib';

export const styles = {
  root: {
    width: 200,
  } satisfies RootStyleSheet,
  container: {
    width: 200,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
  } satisfies BlockStyleSheet,
  innerContainer: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#0000ff',
    marginBottom: 10,
  } satisfies BlockStyleSheet,
};
