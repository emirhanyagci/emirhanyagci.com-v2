/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Pack, hierarchy } from "@visx/hierarchy";
import { ParentSize } from "@visx/responsive";
import styled from "styled-components";

const Circle = styled.a`
  position: absolute;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: white;
  border-radius: 100%;
  z-index: 0;
`;
const CircleImage = styled.div<{ url: string }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 100%;
  width: 95%;
  height: 95%;
`;
const CircleToolTip = styled.div<{ tooltipX: string; tooltipY: string }>`
  position: absolute;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: var(--color-brand-blue-2);
  color: white;
  padding: 0.5rem;
  pointer-events: none;
  transform: translate();
  opacity: 0;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(
    ${({ tooltipX }) => (tooltipX === "left" ? "-100%" : "100%")}
  );
  transform: translateY(
    ${({ tooltipY }) => (tooltipY === "top" ? "-100%" : "100%")}
  );
  left: ${({ tooltipX }) => tooltipX === "left" && "25%"};
  right: ${({ tooltipX }) => tooltipX === "right" && "25%"};
  top: ${({ tooltipX }) => tooltipX === "top" && "25%"};
  bottom: ${({ tooltipX }) => tooltipX === "bottom" && "25%"};
  & > p {
    font-weight: 600;
    white-space: nowrap;
  }
`;
const data = [
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 15,
  },
  {
    name: "React",

    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 10,
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 10,
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 10,
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 10,
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 20,
  },
  {
    name: "React",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    linkUrl: "https://react.dev/",
    value: 10,
  },
];
export default function SkillsPack() {
  const pack = React.useMemo(
    () => ({
      children: data,
      name: "root",
      radius: 0,
      distance: 0,
    }),
    []
  );

  const root = React.useMemo(
    () =>
      hierarchy(pack)
        .sum((d: any) => d!.value)
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0)),
    [pack]
  );
  return (
    <ParentSize>
      {({ width = 800 }) => (
        <div
          style={{
            width,
            height: width,
            position: "relative",
          }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `

        .spon-link {
          transition: all .2s ease;
          transform: translate(-50%, -50%);
        }

        .spon-link:hover {
          z-index: 10;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .spon-link:hover .spon-tooltip {
          opacity: 1;
        }
      `,
            }}
          />
          <Pack root={root} size={[width, width]} padding={width * 0.005}>
            {(packData) => {
              const circles = packData.descendants().slice(1);

              return (
                <div>
                  {[...circles].reverse().map((circle: any, i) => {
                    console.log(circle);

                    const tooltipX = circle.x > width / 2 ? "left" : "right";
                    const tooltipY = circle.y > width / 2 ? "top" : "bottom";
                    return (
                      <Circle
                        key={`circle-${i}`}
                        className="spon-link"
                        href={circle?.data?.linkUrl}
                        style={{
                          left: circle.x,
                          top: circle.y,
                          width: circle.r * 2,
                          height: circle.r * 2,
                        }}
                      >
                        <CircleImage
                          key={`circle-${i}`}
                          url={circle.data.imageUrl}
                        ></CircleImage>
                        <CircleToolTip
                          className="spon-tooltip"
                          tooltipX={tooltipX}
                          tooltipY={tooltipY}
                        >
                          <p>{circle.data.name}</p>
                        </CircleToolTip>
                      </Circle>
                    );
                  })}
                </div>
              );
            }}
          </Pack>
        </div>
      )}
    </ParentSize>
  );
}
