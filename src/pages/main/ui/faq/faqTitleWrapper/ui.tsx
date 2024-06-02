import { useResize } from "@/hooks/useResize";
import { Group, Stack, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";

import { routes } from "@/shared/routing";
import { ArrowRightCircleIcon } from "@/shared/ui";

import classes from "./styles.module.css";

export const FaqTitleWrapper = () => {
  const { isAdaptive: md } = useResize(1200);

  const handleRedirection = () => window.scrollTo(0, 0);

  return !md ? (
    <Stack gap={rem("32px")}>
      <Title order={2} className={classes.faqTitle}>
        <span className={classes.textTitleHighlighted}>F</span>requently <span className={classes.textTitleHighlighted}>A</span>sked{" "}
        <span className={classes.textTitleHighlighted}>Q</span>uestions
      </Title>
      <Group justify={"space-between"}>
        <Text variant="text-2" className={classes.faqSubTitle}>
          Explore Common Queries and Find Quick Solutions in Our FAQ Section.
        </Text>
        <Link to={routes.faq} className={classes.moreQuestionsText} onClick={handleRedirection}>
          <span>More questions</span>
          <ArrowRightCircleIcon />
        </Link>
      </Group>
    </Stack>
  ) : (
    <Stack gap={rem("32px")} className={classes.faqHeader}>
      <Group className={classes.faqTitleWrapper}>
        <Title order={2} className={classes.faqTitle}>
          <span className={classes.textTitleHighlighted}>F</span>requently <span className={classes.textTitleHighlighted}>A</span>sked{" "}
          <span className={classes.textTitleHighlighted}>Q</span>uestions
        </Title>

        <Text variant="text-2" className={classes.faqSubTitle}>
          Explore Common Queries and Find Quick Solutions in Our FAQ Section.
        </Text>
      </Group>
      <Link to={routes.faq} className={classes.moreQuestionsText} onClick={handleRedirection}>
        <span>More questions</span>
        <ArrowRightCircleIcon />
      </Link>
    </Stack>
  );
};
