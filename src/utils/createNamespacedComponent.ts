/**
 *
 * This TypeScript helper function creates a new component by combining an existing component and a set of namespace members.
 * The function returns a new component that extends the original component, including the namespace members. this is done by using Object.assign.
 * @param getComponent T: a function that returns a JSX element constructor
 * @param namespaceMembers U: object U contains the members to be added to the new component
 * @returns T & U
 */
export function createNamespacedComponent<
  T extends React.JSXElementConstructor<any>,
  U
>(getComponent: () => T, namespaceMembers: U): T & U {
  const NamespaceComponent = getComponent();
  return Object.assign(NamespaceComponent, namespaceMembers);
}
