export type Color = string;

export interface Theme {
  colors: {
    backgroundColor: Color;
    textColor: Color;
    tintColor: Color;
    tabIconDefault: Color;
    tabIconSelected: Color;
    tabBar: Color;
    errorBackground: Color;
    errorText: Color;
    warningBackground: Color;
    warningText: Color;
    noticeBackground: Color;
    noticeText: Color;
    tint1: Color;
    tint5: Color;
  };
}
